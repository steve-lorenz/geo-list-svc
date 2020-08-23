import mongoose from 'mongoose';

export const ListItem = 
mongoose.model('ListItem', 
    { 
        description: String,
        isPurchased: Boolean, 
    }
);