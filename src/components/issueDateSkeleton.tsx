import { Skeleton } from './ui/skeleton';

export function IssueDataSkeleton() {
    return (
        <>
            <main className="flex justify-center items-center ">
                <div className="bg-base-profile rounded-xl -mt-20 p-8 gap-10 w-[54rem] ">

                    <div>
                        <div className="flex justify-between items-center pb-4">
                            <Skeleton className='' />
                            <Skeleton className='' />
                        </div>

                        <h1 className="font-bold text-2xl pb-2"><Skeleton /> </h1>

                        <div className='gap-5 flex pt-6 '>
                            <Skeleton className='' />
                            <Skeleton className='' />
                            <Skeleton className='' />
                        </div>
                    </div>
                </div>
            </main>

            <main className='flex justify-center items-center flex-col mt-2 '>
                <div className="w-[54rem] px-8 py-10 flex flex-col gap-2">
                    <Skeleton className=''/>
                    <Skeleton className=''/>
                    <Skeleton className=''/>
                </div>

            </main>
        </>

    )
}