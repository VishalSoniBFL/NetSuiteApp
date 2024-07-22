import React from "react";

import axios from "axios";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://td2929815.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=810&deploy=1",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      'OAuth realm="TD2929815",oauth_consumer_key="679ae2e6dc8ef0a5f83ab3eaac8726d09ccd0796c8b36780db1ea0617d80315e",oauth_token="be197d47f2b1925dd5ba1e1e7082c23707b1582b5934581381f4c26317950150",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1721640213",oauth_nonce="hXG2DO1JZNX",oauth_version="1.0",oauth_signature="B2FZaaGIByPSTvAtuovsMOoZJOsFSh16wmXVjXNND%2BI%3D"',
    Cookie:
      "_abck=E142081BE19FAB56418DA87EA87A565C~-1~YAAQLJYRYMTFBd2OAQAAJsZm5guLW476Teuu6YxBZ06+iwDbLUHaa3SKDgrt7qfKhzBUtCitRh8Wks/atCW7ZGoI3vxv6NN1VLUFwDR5yVRs7JaGNsIeVLFIeW/xxH9P5dA7tWCEvOxxuTbVzh2Fjfo+keVxD232Sfm1GVXaVJlWTIq/XrOiUvLhgRlFE4YPnA7RTAzJNbOmaJmgqx3aiiZoX+Q8uj2KQbHW0ce2VH3oe6dlo2RINLASQdvzNDX1VAbO/AUBMdQ00NHHeyb0prO3Z8yI8pViO0v4t3SUNo8XWu43V0PGrBOIqIq5x33RmR7p5LdlFGU/ekmAGkjpzo7wnrVLpBF2IHI/q9aoDrQokGdXKaQwchCKog==~-1~-1~-1; ak_bmsc=96180D39F5BBFA21ABEA13498B4EA96B~000000000000000000000000000000~YAAQZXxBF3zB4NCQAQAA9y+f2RhOzRnrDfHMnk3d5Huk8kLobYO6irMpgeWHtAH2TmNXC1OMWeUvVF+fAKy3ryjtpxpEEbhfb7JDY079mYQDQB8HfSd+2GpUk9Un5uJ/dR3mHitrbsHFwrEv3o/Ex4LgV7DvzqyQ9S8XEwvLheR5uExECZ8md4Cwt/YI+ldKKSkyPwCyERa38AiEFAqywGZe0TnRFlEFWpTsgIcbYrfYjETjpAf/bS7Iuffla1QGP/cBHb5o4h1rzenpRCddZ4l2Nhl8I0yieUm9uRHf73HyNhyAgYB2127dggGANREp+yWM8ujrpXv9qrpOUaeijZr/mDLwITIDOJlkyayVmJDwI8jF7kAu8pGi21lNl9iHJPs5ptgrr4DU+5G3; bm_sv=A00C950F6FF781B2F431F41A106CF035~YAAQZXxBF9z64NCQAQAAzx2g2RicjzV4SaoXMcRZZzUBSd8M+2++EnwAIlo6QIRRLplimzzap26YuKEJPYJbIw81QaXZJvQF/iUb7+cVYwHKY+kcXjDmRe50akX4UPu8UvJDYPFa4JMUsBmykwtWiM7NrcoWGkdZJl9jno17V14JfOK1MgJq0Y/zyUplfI7Oe7zf78kUt9NIpIBUQ2FmLK4IQjFqY0qQ/vjPj8kJoF4lS48y7dMkwRPTQ9s0ix8uQUzw36KqYEdn8kZ1eq4Y~1",
  },
};
var reqResponce;
alert("pageCalled");
try {
  axios
    .request(config)
    .then((response) => {
      reqResponce = response;
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.body));
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
} catch (error) {
  alert(error);
}

alert(reqResponce);

const NSBackend = () => {
  return <div>Response Div</div>;
};

export default NSBackend;
