import React, { useEffect } from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
// import Quote from "components/frontend/Typography/Quote.js";
// // core components

// import blog4 from "assets/img/examples/blog4.jpg";
// import blog3 from "assets/img/examples/blog3.jpg";
// import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/frontend/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

const SectionText = (props) => {
  const classes = useStyles();

  // const imgClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRounded,
  //   classes.imgFluid
  // );

  const { ...rest } = props;

  useEffect(() => {
    // console.log(converter.convert(div));
    return () => {
      // setState(false);
    };
  }, []);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={8}
          md={8}
          dangerouslySetInnerHTML={{
            __html: rest.description,
          }}
        ></GridItem>
        {/* <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            The Castle Looks Different at Night...
          </h3>
          <p>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more. We are here to make life better.
            <br />
            <br />
            And now I look and look around and there’s so many Kanyes I{"'"}ve
            been trying to figure out the bed design for the master bedroom at
            our Hidden Hills compound... and thank you for turning my personal
            jean jacket into a couture piece.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“And thank you for using my personal jean jacket into a couture piece.”"
            author="Kanye West, Producer."
          />
        </GridItem> */}
        {/* <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem> */}
        {/* <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            We are here to make life better. And now I look and look around and
            there’s so many Kanyes I{"'"}ve been trying to figure out the bed
            design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            <br />I speak yell scream directly at the old guard on behalf of the
            future. daytime All respect prayers and love to Phife’s family Thank
            you for so much inspiration.
          </p>
          <p>
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I{"'"}ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife’s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I{"'"}m so proud of the nr #1 song in the country. Panda!
            Good music 2016!
          </p>
          <p>
            I love this new Ferg album! The Life of Pablo is now available for
            purchase I have a dream. Thank you to everybody who made The Life of
            Pablo the number 1 album in the world! I{"'"}m so proud of the nr #1
            song in the country. Panda! Good music 2016!
          </p>
        </GridItem> */}
      </GridContainer>
    </div>
  );
};

export default SectionText;
