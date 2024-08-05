import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Navbar from '@/components/Navbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className="collaborative-room">
                    <Navbar>
                        <div className='flex w-fit items-center justify-center gap-2'>
                            <p className='document-title'> fake document title</p>
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