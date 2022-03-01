import { prop, getModelForClass, ReturnModelType } from '@typegoose/typegoose';

export class SettingsClass {
    @prop({ type: String, required: true })
    public id?: string;

    @prop({ type: String, required: true })
    public settingName?: string;

    @prop({ type: Boolean, default: false, required: false })
    public status?: boolean;
}

let SettingModel = getModelForClass(SettingsClass);

export default SettingModel;