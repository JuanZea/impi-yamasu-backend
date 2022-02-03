import { app } from './app';
const port = 8000;

const server = app.listen(port, (): void => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on port: ${port}`);
});

export { app as accessApp };
