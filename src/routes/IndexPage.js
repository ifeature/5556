import React from 'react';
import { connect } from 'dva';
import { Row, Col, LocaleProvider, Button } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import JsmpCalendar from '../components/Calendar';
import JsmpTimeline from '../components/TImeline';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <LocaleProvider locale={enUS}>
      <div className={styles.normal}>
        <h1 className={styles.title}>JSMP Calendar</h1>
        <Row>
          <Col md={12}>
            <div className={styles.welcome} />
            {/* Logo */}
          </Col>
          <Col md={12}>
            <ul className={styles.list}>
              <li>Full source code can be found</li>
              <li><a href="https://git.epam.com/Artem_Nakhodkin/js_mentoring_kyiv_2017">here</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <JsmpCalendar />
        </Row>
        <Row>
          <Col md={6}>
            <JsmpTimeline />
          </Col>
          <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
          </div>
        </Row>
      </div>
    </LocaleProvider>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
