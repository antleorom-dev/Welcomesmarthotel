const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es') 
            ? '¡Bienvenidos al tren Al-Andalus! Espero que su estancia aquí sea lo más satisfactoria posible. Si puedo ayudarte en alguna cosa, por favor, házmelo saber. Mi objetivo es que tu viaje sea lo más cómodo posible.'
            : 'Welcome to the Al-Andalus train! I hope your stay here is as pleasant as possible. If I can help you with anything, please let me know. My goal is to make your journey as comfortable as possible.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(locale.startsWith('es') ? '¿En qué puedo ayudarle?' : 'Is there anything I can help you with?')
            .getResponse();
    }
};

const HelloAlandalusIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloAlandalusIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? '¡Bienvenidos al tren Al-Andalus! Espero que su estancia aquí sea lo más satisfactoria posible. Si puedo ayudarte en alguna cosa, por favor, házmelo saber. Mi objetivo es que tu viaje sea lo más cómodo posible.'
            : 'Welcome to the Al-Andalus train! I hope your stay here is as pleasant as possible. If I can help you with anything, please let me know. My goal is to make your journey as comfortable as possible.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloAlandalusIntentHandler
    )
    .lambda();

