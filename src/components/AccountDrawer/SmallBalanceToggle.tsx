import { t } from '@lingui/macro'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { SettingsToggle } from './SettingsToggle'

// Set the default value to false to show small balances by default
const hideSmallBalancesAtom = atomWithStorage<boolean>('hideSmallBalances', false)

export function SmallBalanceToggle() {
  const [hideSmallBalances, updateHideSmallBalances] = useAtom(hideSmallBalancesAtom)

  return (
    <SettingsToggle
      title={t`Hide small balances`}
      isActive={hideSmallBalances}
      toggle={() => void updateHideSmallBalances((value) => !value)}
    />
  )
}
