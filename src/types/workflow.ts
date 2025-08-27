import { WorkflowOptions } from '@pictaccio/shared/src/types/workflow_options';

export type Workflow = {
    id: number;
    internal_name: string;
    options: WorkflowOptions;
}
