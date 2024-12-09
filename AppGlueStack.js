import React from 'react';
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { Button, ButtonText } from './components/ui/button';
import { View } from 'react-native';
import "./global.css";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from './components/ui/accordion';
// import { Divider } from './components/ui/gluestack/design-system';
import { Spinner } from './components/ui/spinner';
import { Input, InputField } from './components/ui/input';


export default function AppGlueStack () {
  return (
    <GluestackUIProvider>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button >
        <ButtonText>Click Me</ButtonText>
      </Button>


      <Accordion size="md" variant="filled" type="single" isCollapsible={true} isDisabled={false}  className="m-5 w-[90%] border border-outline-200">
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      How do I place an order?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon  className="ml-3"/>
                    ) : (
                      <AccordionIcon className="ml-3"/>
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              To place an order, simply select the products you want, proceed to
              checkout, provide shipping and payment information, and finalize
              your purchase.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        {/* <Divider /> */}
         <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon className="ml-3"/>
                    ) : (
                      <AccordionIcon  className="ml-3"/>
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        </Accordion>


        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
            placeholder='Enter Text here...'
          />
        </Input>
      

        <Spinner size="small" color="red" />
       
      
    </View>
    </GluestackUIProvider>

  );
};

