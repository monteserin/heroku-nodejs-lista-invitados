import invitadoRoutes from './invitado/adapters/http';
// import userSockets from './user/adapters/socket';
// import authRoutes from './auth/adapters/http';

export const Routes = (app) => {
  invitadoRoutes(app, '/guest');
  //  authRoutes(app);

}

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
}