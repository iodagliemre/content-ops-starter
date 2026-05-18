import { Model } from '@stackbit/types';

export const PhaseItem: Model = {
    type: 'object',
    name: 'PhaseItem',
    label: 'Phase',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'tagline',
            label: 'Phase label',
            required: false,
            hidden: false,
            localized: false
        },
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
