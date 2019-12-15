import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAlias('@components', path.join(__dirname, '/components/'));
moduleAlias.addAlias('@utils', path.join(__dirname, '/utils/'));
moduleAlias.addAlias('@sections', path.join(__dirname, '/sections/'));
