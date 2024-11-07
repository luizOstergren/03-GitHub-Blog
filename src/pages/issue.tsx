import { useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"

import { Header } from '../components/header'
import { IssuesProps } from './home'
import { useParams } from "react-router-dom"
import { IssueData } from "../components/issueData"

const username = 'luizOstergren';
const repoName = 'Issues';

export function Issue() {
    const [issueInfo, setIssueInfo] = useState<IssuesProps>({} as IssuesProps)

    const { id } = useParams()

    const getIssuesInfo = useCallback(async () => {
        try {
            const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)
            setIssueInfo(response.data)
        } catch {
      console.log("Informações não encontradas")
      return null
    }
    }, [issueInfo])

    useEffect(() => {
        getIssuesInfo()
    }, [])

    return (
        <div>
            <Header />

            <IssueData issueInfo={issueInfo} />
        </div>
    )
}
