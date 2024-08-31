import { t } from '@lingui/macro'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { SettingsToggle } from './SettingsToggle'

// Set the default value to true to show testnets by default
export const showTestnetsAtom = atomWithStorage<boolean>('showTestnets', true)

export function TestnetsToggle() {
  const [showTestnets, updateShowTestnets] = useAtom(showTestnetsAtom)

  return (
    <SettingsToggle
      title={t`Show testnets`}
      dataid="testnets-toggle"
      isActive={showTestnets}
      toggle={() => void updateShowTestnets((value) => !value)}
    />
  )
}
