import styled from 'styled-components'

import { COLORS } from '../assets/colors'

export const CustomButton = styled.button`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${COLORS.BLUE};
    border: none;
    padding: 1em 4em;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px ${COLORS.GREY};

    &.button {
        &--dark {
           background-color: ${COLORS.DARK_BLUE};
        }

        &--light {
            background-color: ${COLORS.LIGHT_BLUE};
        }

        &--red {
            background-color: ${COLORS.RED};
        }

        &--orange {
            background-color: ${COLORS.ORANGE};
        }

        &--rounded {
            border-radius: 20px;
        }

        &--small {
            padding: 0.75em 1em;
        }
    }
`
