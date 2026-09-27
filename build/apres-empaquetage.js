/* Après l'empaquetage : pose l'icône et les informations de version sur Frigourmand.exe.
   (Fait en JavaScript pur avec resedit, ce qui permet de construire l'installeur Windows sans Wine.) */
'use strict';

const fs = require('fs');
const path = require('path');

exports.default = async function apresEmpaquetage(context) {
  if (context.electronPlatformName !== 'win32') return;
  const ResEdit = await import('resedit');
  const { NtExecutable, NtExecutableResource, Data, Resource } = ResEdit.default || ResEdit;
  const nomExe = context.packager.appInfo.productFilename + '.exe';
  const exe = path.join(context.appOutDir, nomExe);
  const version = context.packager.appInfo.version;

  const binaire = NtExecutable.from(fs.readFileSync(exe), { ignoreCert: true });
  const res = NtExecutableResource.from(binaire);

  const ico = Data.IconFile.from(fs.readFileSync(path.join(__dirname, 'icon.ico')));
  const groupes = Resource.IconGroupEntry.fromEntries(res.entries);
  const idGroupe = groupes.length ? groupes[0].id : 1;
  const langue = groupes.length ? groupes[0].lang : 1033;
  Resource.IconGroupEntry.replaceIconsForResource(res.entries, idGroupe, langue, ico.icons.map((i) => i.data));

  const infos = Resource.VersionInfo.fromEntries(res.entries);
  if (infos.length) {
    const vi = infos[0];
    const [a, b, c] = version.split('.').map((x) => parseInt(x, 10) || 0);
    vi.setFileVersion(a, b, c, 0, 1033);
    vi.setProductVersion(a, b, c, 0, 1033);
    const langs = vi.getAllLanguagesForStringValues();
    for (const l of langs) {
      vi.setStringValues(l, {
        FileDescription: 'Frigourmand',
        ProductName: 'Frigourmand',
        CompanyName: 'Unyti',
        LegalCopyright: 'Unyti',
        OriginalFilename: nomExe,
        InternalName: 'Frigourmand',
        FileVersion: version,
        ProductVersion: version
      });
    }
    vi.outputToResourceEntries(res.entries);
  }

  res.outputResource(binaire);
  fs.writeFileSync(exe, Buffer.from(binaire.generate()));
  console.log('  • icône et version posées sur ' + nomExe);
};
