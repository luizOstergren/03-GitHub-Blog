import { ArrowSquareOut, ArrowLeft, Calendar, ChatCircleText, GithubLogo } from 'phosphor-react'
import { IssuesProps } from '../pages/home';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IssueDataSkeleton } from './issueDateSkeleton';

interface IssueDataProps {
    issueInfo: IssuesProps;
}

export function IssueData({ issueInfo }: IssueDataProps) {
    
    if (!issueInfo.user){
        return null
    }

    // console.log(issueInfo.user.login)
    return (
        <>
            {issueInfo ? (
                <>
                    <main className="flex justify-center items-center ">
                        <div className="bg-base-profile rounded-xl -mt-20 text-base-subtitle p-8 gap-10 w-[54rem] ">

                            <div>
                                <div className="flex justify-between items-center text-blue font-bold text-xs pb-4">
                                    <a href='/' className='gap-2 items-center flex border-b-2 border-b-base-profile  hover:border-b-2 hover:border-b-blue hover:ease-linear duration-300 cursor-pointer'><ArrowLeft size={18} /> VOLTAR</a>
                                    <a href={issueInfo.html_url} target='_blank' className='gap-2 items-center flex border-b-2 border-b-base-profile  hover:border-b-2 hover:border-b-blue hover:ease-linear duration-300'>VER NO GITHUB <ArrowSquareOut size={18} /></a>
                                </div>
                                <h1 className="font-bold text-2xl pb-2">{issueInfo.title} </h1>

                                <div className='gap-5 flex pt-6 '>
                                    <span className='gap-2 items-center flex text-base-subtitle'><GithubLogo /> {issueInfo.user.login}
                                    </span>
                                    <span className='gap-2 items-center flex text-base-subtitle'><Calendar />{formatDistanceToNow(issueInfo.created_at, {
                                        locale: ptBR,
                                        addSuffix: true,
                                    }
                                    )}
                                    </span>
                                    <span className='gap-2 items-center flex text-base-subtitle'><ChatCircleText /> {issueInfo.comments} comentários</span>
                                </div>
                            </div>
                        </div>
                    </main>
                    
                    <main className='flex justify-center items-center flex-col mt-2 '>
                        <div className="text-base-text w-[54rem] px-8 py-10 flex flex-col gap-2">
                            <ReactMarkdown>
                                {issueInfo.body}
                            </ReactMarkdown>
                        </div>

                </main>
                </>

            ) : (
                <IssueDataSkeleton />
            )
            }

        </>
    )
}