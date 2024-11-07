import { IssuesProps } from "../pages/home";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueProps {
    issue: IssuesProps;
}

export function Issues({ issue }: IssueProps) {

    return (
        <a href={`/issue/${issue.number}`}>
            <div className="p-8 bg-base-post w-[416px] max-h-64 overflow-y-hidden rounded-xl border-2 border-base-post hover:border-2 hover:border-base-label transition-all cursor-pointer overflow-x-hidden ">
                <div className="flex justify-between items-center gap-4">
                    <h1 className="font-bold text-xl pb-2 text-base-title">{issue.title}</h1>
                    <span className='text-base-span text-sm w-25'>
                        {formatDistanceToNow(issue.created_at, {
                        locale: ptBR,
                        addSuffix: true,
                    }
        )}
        </span>
                </div>
                <span className="text-base-text text-ellipsis">
                    {issue.body}
                </span>
            </div>
        </a>
    )
}