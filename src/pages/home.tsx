import { Header } from '../components/header'
import { Issues } from '../components/issues';
import { Profile } from '../components/profile';

import { useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Search } from '../components/search';

const username = 'luizOstergren';
const repoName = 'Issues';

export interface IssuesProps {
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  number: number;
  title: string;
  id: number;
  user: {
    login: string;
  }
}

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  const getIssues = useCallback(async (query: string = "") => {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
      setIssues(response.data.items)
    } catch {
      console.log("Informações não encontradas")
      return null
    }
  }, [issues])

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <div>
      <Header />

      <Profile />

      <div className='flex justify-center items-center flex-col mt-20'>
        <Search issuesLenght={issues.length} getIssues={getIssues} />

        <div className='grid grid-cols-2 w-[54rem] pb-16 gap-8'>
          {issues.map((issue) => (
            <Issues key={issue.id} issue={issue} />
          ))}
        </div>
      </div>

    </div>
  )
}
