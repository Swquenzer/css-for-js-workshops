import React from 'react';
import styled, {css} from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

import VarientLabel, { 
  VARIANT_LABEL_SALE, 
  VARIANT_LABEL_NEW, 
  VARIANT_LABEL_DEFAULT 
} from './VarientLabel';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? VARIANT_LABEL_SALE
    : isNewShoe(releaseDate)
      ? VARIANT_LABEL_NEW
      : VARIANT_LABEL_DEFAULT

  const isOnSale = variant === VARIANT_LABEL_SALE;

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <VarientLabel variant={variant} />
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceWrapper>
            <Price isOnSale={isOnSale}>
              { formatPrice(price) }
            </Price>
            {isOnSale && (
              <SalePrice>
                {formatPrice(salePrice)}
              </SalePrice>
            )}
          </PriceWrapper>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  flex: 1 1 340px;
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  position: relative;
  
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const PriceWrapper = styled.span`
  position: absolute;
  right: 0;
`;

const Price = styled.span`
  ${props => props.isOnSale && css`
    text-decoration: line-through;
    color: ${COLORS.gray[700]};
  `}
`;

const SalePrice = styled.span`
  display: block;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

export default ShoeCard;
