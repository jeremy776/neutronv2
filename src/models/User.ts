import { prop, getModelForClass, ReturnModelType } from '@typegoose/typegoose';

export class UserClass {
    @prop({ type: String })
    public id?: string;

    @prop({ type: String, required: true })
    public username?: string;

    @prop({ type: String, required: true })
    public discriminator?: string;

    @prop({ type: Number, required: false, default: 50000})
    public balance?: number;

    @prop({ type: Number, required: false, default: 0 })
    public bank?: number;

    @prop({ type: String, required: false, default: 'user' })
    public workAs?: string;

    @prop({ type: Number, required: false, default: 100000 })
    public maxBank?: number;

    @prop({ type: () => [String], required: false, default: [] })
    public items?: string[];
    
    @prop({ type: Date, required: false, default: Date.now() })
    public useBotAt?: Date;

    public static findByUserId(this: ReturnModelType<typeof UserClass>, id: string) {
        return this.find({ id }).exec();
    }

    public get tag() {
        return `${this.username}${this.discriminator}`
    }
}

let UserModel = getModelForClass(UserClass);

export default UserModel;