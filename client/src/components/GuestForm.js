import React from 'react'

export const GuestForm = () => {
    return (
        <>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}"
                }}
            />
            <link
                type="text/css"
                rel="stylesheet"
                href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5eb3b4ae85bd2e1e2966db96"
            />
            <link
                type="text/css"
                rel="stylesheet"
                href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.31782"
            />
            <link
                type="text/css"
                rel="stylesheet"
                href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.31782"
            />
            <style
                type="text/css"
                id="form-designer-style"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    /* Injected CSS Code */\n.form-label.form-label-auto {\n        \n      display: block;\n      float: none;\n      text-align: left;\n      width: 100%;\n    \n      }\n    /* Injected CSS Code */\n"
                }}
            />
            <form
                className="jotform-form"
                action="https://submit.jotform.com/submit/220724306042443/"
                method="post"
                name="form_220724306042443"
                id={220724306042443}
                acceptCharset="utf-8"
                autoComplete="on"
            >
                <input type="hidden" name="formID" defaultValue={220724306042443} />
                <input type="hidden" id="JWTContainer" defaultValue="" />
                <input type="hidden" id="cardinalOrderNumber" defaultValue="" />
                <div role="main" className="form-all">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n      .form-all:before { background: none;}\n    "
                        }}
                    />
                    <ul className="form-section page-section">
                        <li id="cid_1" className="form-input-wide" data-type="control_head">
                            <div className="form-header-group  header-large">
                                <div className="header-text httal htvam">
                                    <h1 id="header_1" className="form-header" data-component="header">
                                        Guest Details:
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_fullname"
                            id="id_3"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_3"
                                htmlFor="first_3"
                            >
                                Full Name of the Guest
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_3"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div data-wrapper-react="true">
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: "top" }}
                                        data-input-type="first"
                                    >
                                        <input
                                            type="text"
                                            id="first_3"
                                            name="q3_fullName3[first]"
                                            className="form-textbox validate[required]"
                                            data-defaultvalue=""
                                            autoComplete="section-input_3 given-name"
                                            size={10}
                                            defaultValue=""
                                            data-component="first"
                                            aria-labelledby="label_3 sublabel_3_first"
                                            required=""
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="first_3"
                                            id="sublabel_3_first"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            {" "}
                                            First Name{" "}
                                        </label>
                                    </span>
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: "top" }}
                                        data-input-type="last"
                                    >
                                        <input
                                            type="text"
                                            id="last_3"
                                            name="q3_fullName3[last]"
                                            className="form-textbox validate[required]"
                                            data-defaultvalue=""
                                            autoComplete="section-input_3 family-name"
                                            size={15}
                                            defaultValue=""
                                            data-component="last"
                                            aria-labelledby="label_3 sublabel_3_last"
                                            required=""
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="last_3"
                                            id="sublabel_3_last"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            {" "}
                                            Last Name{" "}
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_address"
                            id="id_4"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_4"
                                htmlFor="input_4_addr_line1"
                            >
                                Address
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_4"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div summary="" className="form-address-table jsTest-addressField">
                                    <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                        <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    id="input_4_addr_line1"
                                                    name="q4_address4[addr_line1]"
                                                    className="form-textbox validate[required] form-address-line"
                                                    data-defaultvalue=""
                                                    autoComplete="section-input_4 address-line1"
                                                    defaultValue=""
                                                    data-component="address_line_1"
                                                    aria-labelledby="label_4 sublabel_4_addr_line1"
                                                    required=""
                                                />
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_4_addr_line1"
                                                    id="sublabel_4_addr_line1"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    Street Address{" "}
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                        <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    id="input_4_addr_line2"
                                                    name="q4_address4[addr_line2]"
                                                    className="form-textbox form-address-line"
                                                    data-defaultvalue=""
                                                    autoComplete="section-input_4 address-line2"
                                                    defaultValue=""
                                                    data-component="address_line_2"
                                                    aria-labelledby="label_4 sublabel_4_addr_line2"
                                                />
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_4_addr_line2"
                                                    id="sublabel_4_addr_line2"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    Street Address Line 2{" "}
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                        <span className="form-address-line form-address-city-line jsTest-address-lineField ">
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    id="input_4_city"
                                                    name="q4_address4[city]"
                                                    className="form-textbox validate[required] form-address-city"
                                                    data-defaultvalue=""
                                                    autoComplete="section-input_4 address-level2"
                                                    defaultValue=""
                                                    data-component="city"
                                                    aria-labelledby="label_4 sublabel_4_city"
                                                    required=""
                                                />
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_4_city"
                                                    id="sublabel_4_city"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    City{" "}
                                                </label>
                                            </span>
                                        </span>
                                        <span className="form-address-line form-address-state-line jsTest-address-lineField ">
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    id="input_4_state"
                                                    name="q4_address4[state]"
                                                    className="form-textbox validate[required] form-address-state"
                                                    data-defaultvalue=""
                                                    autoComplete="section-input_4 address-level1"
                                                    defaultValue=""
                                                    data-component="state"
                                                    aria-labelledby="label_4 sublabel_4_state"
                                                    required=""
                                                />
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_4_state"
                                                    id="sublabel_4_state"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    State / Province{" "}
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                        <span className="form-address-line form-address-zip-line jsTest-address-lineField ">
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    id="input_4_postal"
                                                    name="q4_address4[postal]"
                                                    className="form-textbox validate[required] form-address-postal"
                                                    data-defaultvalue=""
                                                    autoComplete="section-input_4 postal-code"
                                                    defaultValue=""
                                                    data-component="zip"
                                                    aria-labelledby="label_4 sublabel_4_postal"
                                                    required=""
                                                />
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_4_postal"
                                                    id="sublabel_4_postal"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    Postal / Zip Code{" "}
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_number"
                            id="id_16"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_16"
                                htmlFor="input_16"
                            >
                                Number of guests
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_16"
                                className="form-input-wide jf-required"
                                data-layout="half"
                            >
                                <input
                                    type="number"
                                    id="input_16"
                                    name="q16_numberOf"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox validate[required]"
                                    data-defaultvalue=""
                                    style={{ width: 310 }}
                                    size={310}
                                    defaultValue=""
                                    data-component="number"
                                    aria-labelledby="label_16"
                                    required=""
                                    step="any"
                                />
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_number"
                            id="id_18"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_18"
                                htmlFor="input_18"
                            >
                                Number of rooms required
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_18"
                                className="form-input-wide jf-required"
                                data-layout="half"
                            >
                                <input
                                    type="number"
                                    id="input_18"
                                    name="q18_numberOf18"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox validate[required]"
                                    data-defaultvalue=""
                                    style={{ width: 310 }}
                                    size={310}
                                    defaultValue=""
                                    data-component="number"
                                    aria-labelledby="label_18"
                                    required=""
                                    step="any"
                                />
                            </div>
                        </li>
                        <li
                            className="form-line jf-required allowTime"
                            data-type="control_datetime"
                            id="id_22"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_22"
                                htmlFor="lite_mode_22"
                            >
                                Arrival Date
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_22"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div data-wrapper-react="true" className="extended">
                                    <div style={{ display: "none" }}>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="month_22"
                                                name="q22_arrivalDate[month]"
                                                size={2}
                                                data-maxlength={2}
                                                data-age=""
                                                maxLength={2}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_22 off"
                                                aria-labelledby="label_22 sublabel_22_month"
                                            />
                                            <span className="date-separate" aria-hidden="true">
                                                -
                                            </span>
                                            <label
                                                className="form-sub-label"
                                                htmlFor="month_22"
                                                id="sublabel_22_month"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Month{" "}
                                            </label>
                                        </span>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="day_22"
                                                name="q22_arrivalDate[day]"
                                                size={2}
                                                data-maxlength={2}
                                                data-age=""
                                                maxLength={2}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_22 off"
                                                aria-labelledby="label_22 sublabel_22_day"
                                            />
                                            <span className="date-separate" aria-hidden="true">
                                                -
                                            </span>
                                            <label
                                                className="form-sub-label"
                                                htmlFor="day_22"
                                                id="sublabel_22_day"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Day{" "}
                                            </label>
                                        </span>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="year_22"
                                                name="q22_arrivalDate[year]"
                                                size={4}
                                                data-maxlength={4}
                                                data-age=""
                                                maxLength={4}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_22 off"
                                                aria-labelledby="label_22 sublabel_22_year"
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="year_22"
                                                id="sublabel_22_year"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Year{" "}
                                            </label>
                                        </span>
                                    </div>
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: "top" }}
                                    >
                                        <input
                                            type="text"
                                            className="form-textbox validate[required, disallowPast, limitDate, validateLiteDate]"
                                            id="lite_mode_22"
                                            size={12}
                                            data-maxlength={12}
                                            maxLength={12}
                                            data-age=""
                                            defaultValue=""
                                            required=""
                                            data-format="mmddyyyy"
                                            data-seperator="-"
                                            placeholder="MM-DD-YYYY"
                                            autoComplete="section-input_22 off"
                                            aria-labelledby="label_22 sublabel_22_litemode"
                                        />
                                        <img
                                            className=" newDefaultTheme-dateIcon icon-liteMode"
                                            alt="Pick a Date"
                                            id="input_22_pick"
                                            src="https://cdn.jotfor.ms/images/calendar.png"
                                            data-component="datetime"
                                            aria-hidden="true"
                                            data-allow-time="Yes"
                                            data-version="v2"
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="lite_mode_22"
                                            id="sublabel_22_litemode"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            {" "}
                                            Date{" "}
                                        </label>
                                    </span>
                                    <span className="allowTime-container timeAMPM">
                                        <div data-wrapper-react="true">
                                            <span
                                                className="form-sub-label-container hasAMPM"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    className="time-dropdown form-textbox validate[required]"
                                                    id="input_22_timeInput"
                                                    name="q22_arrivalDate[timeInput]"
                                                    required=""
                                                    placeholder="HH : MM"
                                                    aria-labelledby="label_22 sublabel_22_hour"
                                                    data-mask="hh:MM"
                                                    defaultValue=""
                                                    data-version="v2"
                                                />
                                                <input
                                                    type="hidden"
                                                    className="form-hidden-time"
                                                    id="input_22_hourSelect"
                                                    name="q22_arrivalDate[hour]"
                                                />
                                                <input
                                                    type="hidden"
                                                    className="form-hidden-time"
                                                    id="input_22_minuteSelect"
                                                    name="q22_arrivalDate[min]"
                                                />
                                                <label
                                                    data-seperate-translate="true"
                                                    className="form-sub-label"
                                                    htmlFor="input_22_timeInput"
                                                    id="sublabel_22_hour"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    Hour Minutes{" "}
                                                </label>
                                            </span>
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <select
                                                    className="time-dropdown form-dropdown validate[required]"
                                                    id="input_22_ampm"
                                                    name="q22_arrivalDate[ampm]"
                                                    data-component="time-ampm"
                                                    required=""
                                                    aria-labelledby="label_22 sublabel_22_ampm"
                                                >
                                                    <option selected="" value="AM">
                                                        {" "}
                                                        AM{" "}
                                                    </option>
                                                    <option value="PM"> PM </option>
                                                </select>
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_22_ampm"
                                                    id="sublabel_22_ampm"
                                                    style={{
                                                        border: 0,
                                                        clip: "rect(0 0 0 0)",
                                                        height: 1,
                                                        margin: "-1px",
                                                        overflow: "hidden",
                                                        padding: 0,
                                                        position: "absolute",
                                                        width: 1,
                                                        whiteSpace: "nowrap"
                                                    }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    AM/PM Option{" "}
                                                </label>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required allowTime"
                            data-type="control_datetime"
                            id="id_24"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_24"
                                htmlFor="lite_mode_24"
                            >
                                Departure Date
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_24"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div data-wrapper-react="true" className="extended">
                                    <div style={{ display: "none" }}>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="month_24"
                                                name="q24_departureDate[month]"
                                                size={2}
                                                data-maxlength={2}
                                                data-age=""
                                                maxLength={2}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_24 off"
                                                aria-labelledby="label_24 sublabel_24_month"
                                            />
                                            <span className="date-separate" aria-hidden="true">
                                                -
                                            </span>
                                            <label
                                                className="form-sub-label"
                                                htmlFor="month_24"
                                                id="sublabel_24_month"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Month{" "}
                                            </label>
                                        </span>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="day_24"
                                                name="q24_departureDate[day]"
                                                size={2}
                                                data-maxlength={2}
                                                data-age=""
                                                maxLength={2}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_24 off"
                                                aria-labelledby="label_24 sublabel_24_day"
                                            />
                                            <span className="date-separate" aria-hidden="true">
                                                -
                                            </span>
                                            <label
                                                className="form-sub-label"
                                                htmlFor="day_24"
                                                id="sublabel_24_day"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Day{" "}
                                            </label>
                                        </span>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: "top" }}
                                        >
                                            <input
                                                type="tel"
                                                className="form-textbox validate[required, disallowPast, limitDate]"
                                                id="year_24"
                                                name="q24_departureDate[year]"
                                                size={4}
                                                data-maxlength={4}
                                                data-age=""
                                                maxLength={4}
                                                defaultValue=""
                                                required=""
                                                autoComplete="section-input_24 off"
                                                aria-labelledby="label_24 sublabel_24_year"
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="year_24"
                                                id="sublabel_24_year"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {" "}
                                                Year{" "}
                                            </label>
                                        </span>
                                    </div>
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: "top" }}
                                    >
                                        <input
                                            type="text"
                                            className="form-textbox validate[required, disallowPast, limitDate, validateLiteDate]"
                                            id="lite_mode_24"
                                            size={12}
                                            data-maxlength={12}
                                            maxLength={12}
                                            data-age=""
                                            defaultValue=""
                                            required=""
                                            data-format="mmddyyyy"
                                            data-seperator="-"
                                            placeholder="MM-DD-YYYY"
                                            autoComplete="section-input_24 off"
                                            aria-labelledby="label_24 sublabel_24_litemode"
                                        />
                                        <img
                                            className=" newDefaultTheme-dateIcon icon-liteMode"
                                            alt="Pick a Date"
                                            id="input_24_pick"
                                            src="https://cdn.jotfor.ms/images/calendar.png"
                                            data-component="datetime"
                                            aria-hidden="true"
                                            data-allow-time="Yes"
                                            data-version="v2"
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="lite_mode_24"
                                            id="sublabel_24_litemode"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            {" "}
                                            Date{" "}
                                        </label>
                                    </span>
                                    <span className="allowTime-container timeAMPM">
                                        <div data-wrapper-react="true">
                                            <span
                                                className="form-sub-label-container hasAMPM"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <input
                                                    type="text"
                                                    className="time-dropdown form-textbox validate[required]"
                                                    id="input_24_timeInput"
                                                    name="q24_departureDate[timeInput]"
                                                    required=""
                                                    placeholder="HH : MM"
                                                    aria-labelledby="label_24 sublabel_24_hour"
                                                    data-mask="hh:MM"
                                                    defaultValue=""
                                                    data-version="v2"
                                                />
                                                <input
                                                    type="hidden"
                                                    className="form-hidden-time"
                                                    id="input_24_hourSelect"
                                                    name="q24_departureDate[hour]"
                                                />
                                                <input
                                                    type="hidden"
                                                    className="form-hidden-time"
                                                    id="input_24_minuteSelect"
                                                    name="q24_departureDate[min]"
                                                />
                                                <label
                                                    data-seperate-translate="true"
                                                    className="form-sub-label"
                                                    htmlFor="input_24_timeInput"
                                                    id="sublabel_24_hour"
                                                    style={{ minHeight: 13 }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    Hour Minutes{" "}
                                                </label>
                                            </span>
                                            <span
                                                className="form-sub-label-container"
                                                style={{ verticalAlign: "top" }}
                                            >
                                                <select
                                                    className="time-dropdown form-dropdown validate[required]"
                                                    id="input_24_ampm"
                                                    name="q24_departureDate[ampm]"
                                                    data-component="time-ampm"
                                                    required=""
                                                    aria-labelledby="label_24 sublabel_24_ampm"
                                                >
                                                    <option selected="" value="AM">
                                                        {" "}
                                                        AM{" "}
                                                    </option>
                                                    <option value="PM"> PM </option>
                                                </select>
                                                <label
                                                    className="form-sub-label"
                                                    htmlFor="input_24_ampm"
                                                    id="sublabel_24_ampm"
                                                    style={{
                                                        border: 0,
                                                        clip: "rect(0 0 0 0)",
                                                        height: 1,
                                                        margin: "-1px",
                                                        overflow: "hidden",
                                                        padding: 0,
                                                        position: "absolute",
                                                        width: 1,
                                                        whiteSpace: "nowrap"
                                                    }}
                                                    aria-hidden="false"
                                                >
                                                    {" "}
                                                    AM/PM Option{" "}
                                                </label>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_radio"
                            id="id_19"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_19"
                                htmlFor="input_19"
                            >
                                Room type
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_19"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div
                                    className="form-single-column"
                                    role="group"
                                    aria-labelledby="label_19"
                                    data-component="radio"
                                >
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_19"
                                            className="form-radio validate[required]"
                                            id="input_19_0"
                                            name="q19_roomType"
                                            defaultValue="Single Occupancy"
                                            required=""
                                        />
                                        <label id="label_input_19_0" htmlFor="input_19_0">
                                            {" "}
                                            Single Occupancy{" "}
                                        </label>
                                    </span>
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_19"
                                            className="form-radio validate[required]"
                                            id="input_19_1"
                                            name="q19_roomType"
                                            defaultValue="Double Occupancy"
                                            required=""
                                        />
                                        <label id="label_input_19_1" htmlFor="input_19_1">
                                            {" "}
                                            Double Occupancy{" "}
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_textarea"
                            id="id_26"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_26"
                                htmlFor="input_26"
                            >
                                Purpose of booking
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_26"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <textarea
                                    id="input_26"
                                    className="form-textarea validate[required]"
                                    name="q26_purposeOf"
                                    style={{ width: 648, height: 163 }}
                                    data-component="textarea"
                                    required=""
                                    aria-labelledby="label_26"
                                    defaultValue={""}
                                />
                            </div>
                        </li>
                        <li
                            className="form-line jf-required"
                            data-type="control_radio"
                            id="id_20"
                        >
                            <label
                                className="form-label form-label-top form-label-auto"
                                id="label_20"
                                htmlFor="input_20"
                            >
                                Please select one category from the following
                                <span className="form-required">*</span>
                            </label>
                            <div
                                id="cid_20"
                                className="form-input-wide jf-required"
                                data-layout="full"
                            >
                                <div
                                    className="form-single-column"
                                    role="group"
                                    aria-labelledby="label_20"
                                    data-component="radio"
                                >
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_20"
                                            className="form-radio validate[required]"
                                            id="input_20_0"
                                            name="q20_pleaseSelect20"
                                            defaultValue="CAT-A: Payment (lodging and boarding) to be made by the concerned section from their allocated budget."
                                            required=""
                                        />
                                        <label id="label_input_20_0" htmlFor="input_20_0">
                                            {" "}
                                            CAT-A: Payment (lodging and boarding) to be made by the
                                            concerned section from their allocated budget.{" "}
                                        </label>
                                    </span>
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_20"
                                            className="form-radio validate[required]"
                                            id="input_20_1"
                                            name="q20_pleaseSelect20"
                                            defaultValue="CAT-B: Payment (lodging and boarding) to be collected from the guest."
                                            required=""
                                        />
                                        <label id="label_input_20_1" htmlFor="input_20_1">
                                            {" "}
                                            CAT-B: Payment (lodging and boarding) to be collected from the
                                            guest.{" "}
                                        </label>
                                    </span>
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_20"
                                            className="form-radio validate[required]"
                                            id="input_20_2"
                                            name="q20_pleaseSelect20"
                                            defaultValue="CAT-C: Payment (lodging and boarding) to be collected from the intender/proposer."
                                            required=""
                                        />
                                        <label id="label_input_20_2" htmlFor="input_20_2">
                                            {" "}
                                            CAT-C: Payment (lodging and boarding) to be collected from the
                                            intender/proposer.{" "}
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_text" id="id_7">
                            <div id="cid_7" className="form-input-wide" data-layout="full">
                                <div id="text_7" className="form-html" data-component="text"></div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_button" id="id_2">
                            <div id="cid_2" className="form-input-wide" data-layout="full">
                                <div
                                    data-align="left"
                                    className="form-buttons-wrapper form-buttons-left   jsTest-button-wrapperField"
                                >
                                    <button
                                        id="input_2"
                                        type="submit"
                                        className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                                        data-component="button"
                                        data-content=""
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li style={{ display: "none" }}>
                            Should be Empty:
                            <input type="text" name="website" defaultValue="" />
                        </li>
                    </ul>
                </div>
                <input
                    type="hidden"
                    className="simple_spc"
                    id="simple_spc"
                    name="simple_spc"
                    defaultValue={220724306042443}
                />

            </form>
        </>
    );
};

export default GuestForm

