import { Tooltip } from "@nextui-org/react"

export const InitiativeIcon = ({ color = '#6f6f6f', tooltip = 'Initiative' }) => {

    return (
        <Tooltip content={tooltip}>
            <svg 
                width="27px"
                height="27px"
                viewBox="0 0 30 30"
                fill="none"
            >
                <path 
                    d="M7.00012 13.5L12 4V10.5H16.9999L12 20L12.0002 13.5H7.00012Z" 
                    stroke={color}
                />
            </svg>
        </Tooltip>
    )
}
