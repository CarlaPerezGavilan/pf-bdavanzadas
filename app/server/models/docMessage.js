import mongoose from 'mongoose';

const docSchema = mongoose.Schema({
    title: String, 
    description: String, 
    days_to_notify: Number, 
    expired: Boolean, 
    selectedFile: String,
    belongs_to: {
        username: String
    },
    createdAt: {
        type: Date, 
        default: new Date()
    }, 
    expirationDate:  Date, 
    notificationDate: Date
});

const DocMessage = mongoose.model('DocMessage', docSchema);

export default DocMessage;