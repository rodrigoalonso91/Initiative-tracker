import { Text } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function Spell ({ name, duration, damage, turn }) {

    // TODO: Convertir en customhook
    const [expiration, setExpiration] = useState(duration)

    useEffect(() => {
        setExpiration(expiration - 1)
    }, [turn])
    

    return (
        <Text size={15} css={{ color: '#fff' }}>
            { name } - Expiration {expiration} - Daño {damage}
        </Text>
    )
}
