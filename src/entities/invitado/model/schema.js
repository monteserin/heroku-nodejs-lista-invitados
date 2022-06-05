import { db, DataTypes } from '@Application/database';

export default db.define('guest', {
	name: DataTypes.STRING,
});

