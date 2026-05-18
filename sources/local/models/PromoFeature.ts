import { Model } from '@stackbit/types';

export const PromoFeature: Model = {
    type: 'object',
    name: 'PromoFeature',
    label: 'Promo Feature',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'text',
            label: 'Description',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'image',
            name: 'icon',
            label: 'Icon',
            required: false,
            hidden: false,
            localized: false
        }
    ]
};
