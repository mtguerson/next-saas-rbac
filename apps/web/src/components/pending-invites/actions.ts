'use server'

import { revalidateTag } from 'next/cache'

import { acceptInvite } from '@/http/accept-invite'

export async function acceptInviteAction(inviteId: string) {
  await acceptInvite(inviteId)

  revalidateTag('organizations')
}

export async function rejectInviteAction(inviteId: string) {
  await acceptInvite(inviteId)

  revalidateTag('organizations')
}
