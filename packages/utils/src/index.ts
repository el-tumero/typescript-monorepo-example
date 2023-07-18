import { peerIdFromString } from '@libp2p/peer-id'


export function convertStringToPeerId(){
    const id = "12D3KooWPGtTh6hUc3AfTu82xVwYKd4dNZSXy47NEqFacVR7V6A6"
    return peerIdFromString(id)
}
