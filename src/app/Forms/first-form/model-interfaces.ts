export interface Tag {
    label?: string;
}

export interface User {
    name?: string;
    email?: string;
}

export interface Task {
    id?: number;
    title?: string;
    description?: string;
    tags: Tag[];
    favorite?: boolean;
    state: State;
    assignee: User;
    oneway?: string;
    twoway?: string;
}

export const stateGroups = [
    {
        label: 'Planung',
        states: ['BACKLOG']
    },
    {
        label: 'Entwicklung',
        states: ['IN_PROGRESS', 'TEST']
    },
    {
        label: 'In Produktion',
        states: ['COMPLETED']
    }
];

export const states = ["Backlog", "Test"];

export const statesAsObjects: State[] = [{ name: 'BACKLOG', text: 'Backlog' },
{ name: 'IN_PROGRESS', text: 'In Bearbeitung' },
{ name: 'TEST', text: 'Test' },
{ name: 'COMPLETED', text: 'Abgeschlossen' }];

interface State {
    name: string;
    text: string;
}


export function createDefaultTask(): Task {
    return {
        title: "Default",
        oneway: "One Way",
        twoway: "Two Way",
        assignee: {},
        tags: [],
        state: statesAsObjects[0]
    }
}