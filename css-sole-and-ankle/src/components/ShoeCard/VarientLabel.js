import React from 'react';
import styled, {css} from 'styled-components/macro';
import { COLORS } from '../../constants';

export const VARIANT_LABEL_SALE = 'on-sale';
export const VARIANT_LABEL_NEW = 'new-release';
export const VARIANT_LABEL_DEFAULT = 'default';

const mapper = {
    [VARIANT_LABEL_SALE]: 'Sale',
    [VARIANT_LABEL_NEW]: 'Just Released!',
    [VARIANT_LABEL_DEFAULT]: ''
}

const VariantLabel = ({ variant }) => {
    const label = mapper[variant] ?? null;

    return label !== [VARIANT_LABEL_DEFAULT] 
    ? (
        <Span variant={ variant }>{ label }</Span>
    ) 
    : null;
};

const Span = styled.span`
    position: absolute; 
    top: 12px;
    right: -5px;

    display: inline-block;
    padding: 5px 8px;
    border-radius: 2px;
    color: white;

    ${props =>
        props.variant === VARIANT_LABEL_SALE && css`
            background-color: ${COLORS.primary};
            color: white;
    `}
    ${props =>
        props.variant === VARIANT_LABEL_NEW && css`
            background-color: ${COLORS.secondary};
    `}
`;

export default VariantLabel;