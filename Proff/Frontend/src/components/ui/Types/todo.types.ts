export interface Todo {
    id?: number;
    title: string;  
    description?: string;
    status: StatusType;
    priority: PriorityType;
    due_date: string;
    created_at?: string;
    updated_at?: string;
}

type StatusType = 'pending' | 'in-progress' | 'completed' | 'cancelled';
type PriorityType = 'low' | 'medium' | 'high';