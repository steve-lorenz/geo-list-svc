import { ListItem } from './models/ListItem';

export const resolvers = {
    Query: {
      listItems: () => ListItem.find(),
      listItem: (_, { id }) => ListItem.findOne({_id: id}),
    },
    Mutation: {
        createListItem: async (_, { description, isPurchased }) => {
            const listItem = new ListItem({ description, isPurchased });
            await listItem.save();
            return listItem;
        },
        removeListItem: async (_, { id }) => {
            return await ListItem.findByIdAndRemove(id)
        },
        updateListItem: async (_, { id, isPurchased, description }) => {
            return ListItem.findOneAndUpdate(
               {_id: id},
               {
                isPurchased, 
                description,
                },
                { new: true }
            );
        },
    },
};
