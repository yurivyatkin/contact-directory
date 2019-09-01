import React from 'react';
import PropTypes from 'prop-types';
import DefaultCard from '../DefaultCard';

const ContactCard = (props) => {
  const { details } = props;
  const { name, email, phone, company = {}, address = {} } = details;
  const companyName = company.name;
  const tagline = company.catchPhrase;
  return (
    <section className="flex flex-row justify-center mb-6">
      <DefaultCard
        name={name}
        email={email}
        phone={phone}
        address={address}
        company={companyName}
        tagline={tagline}
      />
    </section>
  );
};

ContactCard.propTypes = {
  details: PropTypes.object,
};

export default ContactCard;
