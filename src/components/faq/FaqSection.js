import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  textBold: {
    fontWeight: '700',
    color: '#fff',
    fontSize: '16px',
    [theme.breakpoints.up(600)]: {
      fontSize: '20px',
    },
  },
  textLight: {
    color: '#fff',
  },
}));
export default function FaqSection() {
  const classes = useStyles();

  return (
    <div className="faqContainer">
      <h2 className="faqTitle">Frequently Asked Questions</h2>

      <div className="faq">
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.textBold}>
              What is PayFam?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              PayFam is the safest, easiest and cheapest way to transact cash
              and crypto across borders. Pay friends and families in stablecoins
              or local currencies and they can redeem directly to their bank
              account, Mobile Money accounts, crypto Wallet, etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.textBold}>
              How do I get a PayFam Account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              To open a PayFam account, have your phone number & email address
              ready and simply visit our ‘Web App’ .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.textBold}>
              How do I make a transaction on PayFam?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              We have made transactions as easy as it can get. All you need is
              the recipient phone number to send money to them. Even if the
              receiver doesn’t have a PayFam account, they will still be able to
              redeem the money sent to them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.textBold}>
              What is USDC (Stablecoin)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              A stablecoin is a type of cryptocurrency that is pegged to a
              stable asset. USDC is an example of a stablecoin that is pegged to
              the US dollar and its value is intended to remain stable. This
              means if you hold 1 USDC, it is 1 US dollar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.textBold}>
              How do I buy dollars?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              Purchasing dollars on PayFam is easy! Simply add funds to your
              wallet using your preferred payment method, enter the amount of
              dollars you wish to buy, and confirm the transaction. It’s as
              simple as that.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#000',
            borderTop: '0.1px solid #fff',
            padding: '0.6rem',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon
                style={{ fill: '#7b1fa2', cursor: 'pointer' }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.textBold}>
              Which countries can use PayFam?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textLight}>
              Anyone in any country can use PayFam because we are
              crypto-friendly. However, the send and withdraw local fiat
              features are only available to Ghana and Nigeria now. These
              features will be available in your country sooner than you can
              imagine. Don’t miss out. Get PayFam Now!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Link href="/Faqs">
        <p className="readMoreLink">Learn More...</p>
      </Link>
    </div>
  );
}
