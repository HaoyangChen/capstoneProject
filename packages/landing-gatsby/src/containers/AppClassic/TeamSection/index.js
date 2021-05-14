import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import TeamSectionWrapper, { SocialLinks } from './teamSection.style';

const TeamSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  memberName,
  designation,
  contentStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appClassicJson {
        teamMember {
          name
          designation
          id
          thumbnail_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          social_links {
            id
            icon
            url
          }
        }
      }
    }
  `);

  return (
    <TeamSectionWrapper id="teamSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="TEAM MEMBER" {...sectionSubTitle} />
          <Heading
            content="Meet with team member behind scenes"
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {Data.appClassicJson.teamMember.map((member, index) => (
            <Box className="col" {...col} key={`team_key-${index}`}>
              <FeatureBlock
                id={`member-${member.id}`}
                className="team__member"
                icon={
                  <Image
                    fluid={
                      (member.thumbnail_url !== null) | undefined
                        ? member.thumbnail_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`Team member photo ${member.id}`}
                    className="member__photo"
                  />
                }
                contentStyle={contentStyle}
                title={<Heading content={member.name} {...memberName} />}
                description={
                  <Fragment>
                    <Text content={member.designation} {...designation} />
                  </Fragment>
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </TeamSectionWrapper>
  );
};

// TeamSection style props
TeamSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
};

// TeamSection default style
TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '24px',
    marginBottom: '12px',
    color: '#2563FF',
    letterSpacing: '0.15em',
    textAlign: 'center',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '36px',
  },
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 4, 1 / 4, 1 / 4, 1 / 4],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // Team member content default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px',
  },
  // Team member memberName default style
  memberName: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Team member description default style
  designation: {
    fontSize: ['15px', '16px', '14px', '17px'],
    lineHeight: '1',
    color: 'rgba(15, 33, 55, 0.6)',
    mb: 0,
  },
};

export default TeamSection;
