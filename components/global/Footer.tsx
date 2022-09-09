import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'

const Footer: React.FC = () => {
  const { locale } = useRouter()

  return (
    <>
      <Box pt="20" pb="4">
        <Center>
          <Text
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="medium"
          >
            {localize(locale, 'footer')}
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default Footer
