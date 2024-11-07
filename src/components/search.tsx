import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

interface SearchIssuesProps {
    issuesLenght: number;
    getIssues: (query?: string) => Promise<void>;
}

const searchInputSchema = z.object({
    query: z.string(),
})

type SearchInput = z.infer<typeof searchInputSchema>;

export function Search({ issuesLenght, getIssues }: SearchIssuesProps) {
    const { register, handleSubmit } = useForm<SearchInput>({
        resolver: zodResolver(searchInputSchema)
    })

    async function handleSearchIssues(data: SearchInput) {
        await getIssues(data.query);
    }

    return (
        <form className=' mb-12 w-[54rem]' onSubmit={handleSubmit(handleSearchIssues)}>
            <header className='flex justify-between items-center mb-6'>
                <span>Publicações</span>
                <span>{issuesLenght} Publicações</span>
            </header>
            <input type="text" placeholder='Buscar conteúdo' {...register("query")} className='w-full rounded bg-base-input px-3 py-4 placeholder:text-base-label border-2 border-base-input focus-within:border-blue text-base-text' />
        </form>
    )
}
