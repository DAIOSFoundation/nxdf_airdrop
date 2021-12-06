import { useEffect, useState } from 'react'

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null)

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window

      console.log(solana)

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!')
          const response = await solana.connect({ onlyIfTrusted: true })
          console.log('Connected with Public Key:', response.publicKey.toString())

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString())
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    const { solana } = window

    if (solana) {
      const response = await solana.connect()
      console.log('Connected with Public Key:', response.publicKey.toString())
      setWalletAddress(response.publicKey.toString())
    }
  }

  // UseEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return {
    walletAddress,
    connectWallet,
  }
}
