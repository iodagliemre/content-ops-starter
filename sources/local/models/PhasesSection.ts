import { Model } from '@stackbit/types';

export const PhasesSection: Model = {
    type: 'object',
    name: 'PhasesSection',
    label: 'Phases',
    labelField: 'title.text',
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            required: false,
            hidden: false,
            localized: false,
            models: ['TitleBlock']
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'items',
            label: 'Phases',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['PhaseItem']
            }
        },
        {
            type: 'string',
            name: 'quote',
            label: 'Quote',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        }
    ],
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
