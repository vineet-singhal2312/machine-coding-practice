import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useFiler } from "../../providers/filter/FilterContext";
import Button from "@material-ui/core/Button";

export const FilterNav = () => {
  const { filterDispatch, FilteredState } = useFiler();

  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [size, setSize] = React.useState("");

  const handleChangeForCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeForPrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeForSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="filer-nav">
      <FormControl component="fieldset">
        <FormLabel component="legend">Price</FormLabel>
        <RadioGroup
          aria-label="price"
          name="price1"
          value={price}
          onChange={handleChangeForPrice}
        >
          <FormControlLabel
            value="High to Low"
            control={<Radio />}
            checked={FilteredState.isHighToLow}
            label="High to Low"
            onClick={() =>
              filterDispatch({
                type: "PRICE_HIGH_TO_LOW_BUTTON_CLICKED",
              })
            }
          />
          <FormControlLabel
            value="Low To High"
            control={<Radio />}
            checked={FilteredState.isLowToHigh}
            label="Low To High"
            onClick={() =>
              filterDispatch({
                type: "PRICE_LOW_TO_HIGH_BUTTON_CLICKED",
              })
            }
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={category}
          onChange={handleChangeForCategory}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            checked={FilteredState.isCategory === "women"}
            onClick={() =>
              filterDispatch({
                type: "WOMEN_BUTTON_CLICKED",
                payload: "women",
              })
            }
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            checked={FilteredState.isCategory === "men"}
            onClick={() =>
              filterDispatch({
                type: "MEN_BUTTON_CLICKED",
                payload: "men",
              })
            }
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          aria-label="size"
          name="size"
          value={size}
          onChange={handleChangeForSize}
        >
          <FormControlLabel
            value="Small"
            control={<Radio />}
            checked={FilteredState.isSmall}
            onClick={() =>
              filterDispatch({ type: "SMALL_SIZE_BUTTON_CLICKED" })
            }
            label="Small"
          />
          <FormControlLabel
            value="Medium"
            control={<Radio />}
            checked={FilteredState.isMedium}
            label="Medium"
            onClick={() =>
              filterDispatch({
                type: "MEDIUM_SIZE_BUTTON_CLICKED",
              })
            }
          />
          <FormControlLabel
            value="Large"
            control={<Radio />}
            checked={FilteredState.isLarge}
            label="Large"
            onClick={() =>
              filterDispatch({
                type: "LARGE_SIZE_BUTTON_CLICKED",
              })
            }
          />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          filterDispatch({
            type: "CLEAR_BUTTON_BUTTON_CLICKED",
          })
        }
      >
        Clear Filter
      </Button>
    </div>
  );
};
