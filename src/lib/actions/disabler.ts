import type { Action } from 'svelte/action'

const disabler: Action = section => {
  const preferences = section.querySelector<HTMLDetailsElement>(
    '#how-do-you-drink-your-coffee'
  )

  const handleChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement
    const hash = '#want-us-to-grind-them'
    const anchor = section.querySelector<HTMLAnchorElement>(`a[href="${hash}"]`)
    const details = section.querySelector<HTMLDetailsElement>(hash)

    if (value === 'Capsule') {
      anchor?.setAttribute('aria-disabled', 'true')
      details?.setAttribute('aria-disabled', 'true')
      details?.toggleAttribute('open', false)
    } else {
      anchor?.removeAttribute('aria-disabled')
      details?.removeAttribute('aria-disabled')
    }
  }

  preferences?.addEventListener('change', handleChange)

  return {
    destroy: () => preferences?.removeEventListener('change', handleChange)
  }
}

export default disabler
