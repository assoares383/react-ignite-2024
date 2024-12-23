import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState
} from 'react'

import { FieldError } from 'react-hook-form'
import {Box, Container, ErrorMessage } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

const TextInput = forwardRef(function TextInput({
  optional,
  error,
  containerProps,
  onFocus,
  onBlur,
  ...rest
}: Props,
ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container $dateState={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          { ...rest }
        />

        { optional ? <span>Opcional</span> : null }
      </Container>

      {
        error?.message ? (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        ) : null
      }
    </Box>
  )
})


export { TextInput }
