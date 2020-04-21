import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { createForms } from "react-redux-form";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { Feedback } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({ feedback: Feedback }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
