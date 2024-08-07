"use client"
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React, { useRef, useState } from 'react'
import { Editor } from '@/components/editor/Editor'
import Navbar from '@/components/Navbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators'
import { Input } from './ui/input'


const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
    const [documentTitle,setDocumentTitle] = useState();
    const [editing, setEditing] = useState();
    const [loading, setLoading] = useState();

    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLDivElement>(null)

    const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement> ) =>{


    }
    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className="collaborative-room">
                    <Navbar>
                        <div ref={containerRef} className='flex w-full items-center justify-center gap-2'>
                           { editing && !loading?(
                            <Input 
                            type='text'
                            value={documentTitle}
                            ref={inputRef}
                            placeholder="Enter title"
                            onChange={(e)=> setDocumentTitle(e.target.value)}
                            onKeyDown={updateTitleHandler}
                            disable={!editing}
                            className='document-title-page'
                            />
                           ):(
                            <>
                             <p className='document-title'>{documentTitle}</p>
                            </>
                           )}
                        </div>
                        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                            <ActiveCollaborators />
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Navbar>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom