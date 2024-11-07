import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'

interface ProfileDataProps {
    avatar_url: string;
    bio: string;
    company?: string;
    followers: string;
    html_url: string;
    login: string;
    name: string;
}

export function Profile() {
    const [profileData, setProfileData] = useState<ProfileDataProps>({} as ProfileDataProps)

    const getProfileData = useCallback(async () => {
        try {
            const response = await api.get("/users/luizOstergren")
            setProfileData(response.data)
        } finally {

        }
    }, [])

    useEffect(() => {
        getProfileData()
    }, [])

    return (
        <main className="flex justify-center items-center ">
            <div className="bg-base-profile rounded-xl -mt-20 text-base-subtitle p-8 flex justify-center items-center gap-10 w-[54rem] ">
                <img className='rounded w-20 h-20 ' src={profileData.avatar_url} />
                <div>
                    <div className="flex justify-between items-center gap-5">
                        <h1 className="font-bold text-2xl pb-2">{profileData.name}</h1>
                        <a href={profileData.html_url} target='_blank' className='gap-2 items-center flex border-b-2 border-b-base-profile text-blue font-bold text-xs hover:border-b-2 hover:border-b-blue cursor-pointer'>GITHUB <ArrowSquareOut size={18} /></a>
                    </div>
                    <span className="text-base-text">
                        {profileData.bio}
                    </span>
                    <div className='gap-5 flex pt-6 '>
                        <span className='gap-2 items-center flex text-base-subtitle'><GithubLogo /> {profileData.login}</span>
                        <span className='gap-2 items-center flex text-base-subtitle'><Buildings />
                            {profileData?.company ? profileData.company : 'Sem companhia'}</span>
                        <span className='gap-2 items-center flex text-base-subtitle'><Users /> {profileData.followers} seguidores</span>
                    </div>
                </div>
            </div>
        </main>
    )
}