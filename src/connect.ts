import mongoose from 'mongoose';

type TInput = {
    MongoDB: string
}

export default ({MongoDB}: TInput) => {
    const connect = () => {
        mongoose.connect(MongoDB).then(() => {
            return console.log(`Successully connected to Databse`);
        }).catch(e => {
            console.error(`Unable to connect: ${e}`);
            return process.exit(1);
        });
    }
    connect();

    mongoose.connection.on('disconnect', connect);
}