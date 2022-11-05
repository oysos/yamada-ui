import { Box, useColorScheme, useColorSchemetValue } from '@yamada-ui/react'

export default {
  title: 'System / Hooks / useColorScheme',
}

export const basic = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Box
      bg={['blackAlpha.800', 'whiteAlpha.800']}
      p='md'
      rounded='md'
      color={['whiteAlpha.800', 'blackAlpha.800']}
    >
      The current colorScheme is "{colorScheme}"
    </Box>
  )
}

export const withValue = () => {
  const { colorScheme } = useColorScheme()
  const bg = useColorSchemetValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useColorSchemetValue('whiteAlpha.800', 'blackAlpha.800')

  return (
    <Box bg={bg} p='md' rounded='md' color={color}>
      The current colorScheme is "{colorScheme}"
    </Box>
  )
}
