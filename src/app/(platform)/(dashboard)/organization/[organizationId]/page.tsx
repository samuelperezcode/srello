import {auth, OrganizationSwitcher} from '@clerk/nextjs'

export default function OrganizationIdPage() {
  const {userId, orgId} = auth()
  return (
    <div>
      Organization Page
      <p>user: {userId}</p>
      <p>org: {orgId}</p>
      <OrganizationSwitcher
        hidePersonal
      />
    </div>
  )
}
